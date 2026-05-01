'use client';

import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ExternalLink,
  Hand,
  SearchX,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
} from 'lucide-react';

export type ProjectPopupItem = {
  name: string;
  description: string;
  tech: string[];
  impact: string[];
  github: string;
  codeUnavailable?: boolean;
  demo?: string | null;
  images: string[];
  imageScales?: number[];
  details: string[];
  detailSections?: {
    title: string;
    description?: string;
    items?: string[];
  }[];
  resultGroups?: {
    name: string;
    metrics: {
      label: string;
      value: string;
    }[];
  }[];
  findings?: string[];
  limitations?: string[];
};

interface ProjectPopupProps {
  open: boolean;
  project: ProjectPopupItem | null;
  onClose: () => void;
}

const VISIBLE_THUMBNAILS = 4;
const MIN_ZOOM = 1.25;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

const formatImageLabel = (src: string) =>
  decodeURIComponent(src.split('/').pop() ?? 'Project image')
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ');

const ProjectPopup = ({ open, project, onClose }: ProjectPopupProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: '50%', y: '50%' });
  const [zoomLevel, setZoomLevel] = useState(MIN_ZOOM);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const startOffset = useRef({ x: 0, y: 0 });

  if (!open || !project) return null;

  const imageCount = project.images.length;
  const hasImages = imageCount > 0;
  const currentImage = hasImages ? project.images[activeImage] : null;
  const currentImageScale = project.imageScales?.[activeImage] ?? 1;
  const visibleThumbnailCount = Math.min(VISIBLE_THUMBNAILS, imageCount);
  const thumbnailStart = Math.max(
    0,
    Math.min(activeImage - Math.floor(visibleThumbnailCount / 2), imageCount - visibleThumbnailCount)
  );
  const visibleThumbnails = project.images.slice(thumbnailStart, thumbnailStart + visibleThumbnailCount);
  const currentImageLabel = currentImage ? formatImageLabel(currentImage) : 'Screenshots coming soon';

  const resetZoom = () => {
    setZoomed(false);
    setZoomLevel(MIN_ZOOM);
    setZoomOrigin({ x: '50%', y: '50%' });
    setPanOffset({ x: 0, y: 0 });
    setDragging(false);
  };

  const gotoNext = () => {
    setActiveImage((prev) => (prev + 1) % imageCount);
    resetZoom();
  };

  const gotoPrev = () => {
    setActiveImage((prev) => (prev - 1 + imageCount) % imageCount);
    resetZoom();
  };

  const clampZoom = (value: number) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, value));
  const clampPan = (value: number) => Math.max(-260, Math.min(260, value));

  const updateZoomLevel = (value: number) => {
    setZoomed(true);
    setZoomLevel(clampZoom(value));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLImageElement>) => {
    if (!zoomed) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerStart.current = { x: event.clientX, y: event.clientY };
    startOffset.current = panOffset;
    setDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLImageElement>) => {
    if (!zoomed || !pointerStart.current || !dragging) return;
    event.preventDefault();
    const dx = event.clientX - pointerStart.current.x;
    const dy = event.clientY - pointerStart.current.y;
    setPanOffset({
      x: clampPan(startOffset.current.x + dx),
      y: clampPan(startOffset.current.y + dy),
    });
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLImageElement>) => {
    if (!zoomed || !pointerStart.current) return;
    event.preventDefault();
    const dx = event.clientX - pointerStart.current.x;
    const dy = event.clientY - pointerStart.current.y;
    const distance = Math.hypot(dx, dy);
    setDragging(false);

    if (distance < 6) {
      resetZoom();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
        onClick={() => {
          onClose();
          setActiveImage(0);
          setZoomed(false);
          setZoomLevel(MIN_ZOOM);
        }}
    >
      <motion.div
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={() => {
            onClose();
            setActiveImage(0);
            setZoomed(false);
            setZoomLevel(MIN_ZOOM);
          }}
          className="absolute right-4 top-4 z-30 rounded-full bg-zinc-950/90 p-1 text-zinc-400 hover:text-white"
          aria-label="Close project details"
        >
          <X size={24} />
        </button>

        <div className="max-h-[calc(100vh-2rem)] overflow-y-auto sm:max-h-[calc(100vh-3rem)]">
          <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:p-8">
            <div className="min-w-0 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-teal-400">Project Details</p>
                <h2 className="mt-3 text-3xl font-bold text-white">{project.name}</h2>
                <p className="mt-3 leading-relaxed text-zinc-300">{project.description}</p>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                {hasImages ? (
                  <>
                    <button
                      type="button"
                      onClick={gotoPrev}
                      className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={gotoNext}
                      className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                    {zoomed && (
                      <>
                        <button
                          type="button"
                          onClick={resetZoom}
                          className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs text-zinc-300 transition-colors hover:bg-black/85 hover:text-white"
                        >
                          <SearchX size={14} />
                          <span>Zoom out</span>
                        </button>
                        <div className="absolute right-3 top-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-wrap items-center justify-end gap-2 rounded-2xl bg-black/70 px-3 py-2 text-xs text-zinc-300">
                          <button
                            type="button"
                            onClick={() => updateZoomLevel(zoomLevel - ZOOM_STEP)}
                            className="rounded-full border border-white/10 p-1 text-zinc-300 transition hover:text-white"
                            aria-label="Decrease zoom"
                          >
                            <Minus size={14} />
                          </button>
                          <input
                            type="range"
                            min={MIN_ZOOM}
                            max={MAX_ZOOM}
                            step={ZOOM_STEP}
                            value={zoomLevel}
                            onChange={(event) => updateZoomLevel(Number(event.target.value))}
                            className="h-1 w-24 accent-teal-400"
                            aria-label="Image zoom level"
                          />
                          <button
                            type="button"
                            onClick={() => updateZoomLevel(zoomLevel + ZOOM_STEP)}
                            className="rounded-full border border-white/10 p-1 text-zinc-300 transition hover:text-white"
                            aria-label="Increase zoom"
                          >
                            <Plus size={14} />
                          </button>
                          <span className="min-w-9 text-right">{Math.round(zoomLevel * 100)}%</span>
                          <span className="hidden items-center gap-1 sm:flex">
                            <Hand size={14} />
                            {dragging ? 'Dragging' : 'Drag to pan'}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="flex h-[clamp(16rem,42vh,28rem)] items-center justify-center bg-zinc-950/60 p-3 sm:p-4">
                      <img
                        src={currentImage ?? ''}
                        alt={`${project.name} screenshot ${activeImage + 1}`}
                        draggable={false}
                        onDragStart={(event) => event.preventDefault()}
                        className={`h-full w-full object-contain transition-transform duration-300 ${
                          zoomed ? 'cursor-grab' : 'cursor-zoom-in'
                        } ${dragging ? 'cursor-grabbing' : ''}`}
                        style={{
                          transformOrigin: `${zoomOrigin.x} ${zoomOrigin.y}`,
                          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${
                            zoomed ? currentImageScale * zoomLevel : currentImageScale
                          })`,
                        }}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerLeave={() => setDragging(false)}
                        onClick={(event) => {
                          if (zoomed) return;

                          const img = event.currentTarget as HTMLImageElement;
                          const rect = img.getBoundingClientRect();
                          const x = ((event.clientX - rect.left) / rect.width) * 100;
                          const y = ((event.clientY - rect.top) / rect.height) * 100;

                          setPanOffset({ x: 0, y: 0 });
                          setZoomOrigin({ x: `${x}%`, y: `${y}%` });
                          setZoomLevel(MIN_ZOOM);
                          setZoomed(true);
                        }}
                      />
                    </div>
                    <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/70 px-3 py-1 text-xs text-zinc-300">
                      <span>{activeImage + 1}/{imageCount}</span>
                      <span className="text-zinc-500">Click image to {zoomed ? 'shrink' : 'zoom'}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex h-[clamp(16rem,42vh,28rem)] flex-col items-center justify-center bg-zinc-950/60 p-6 text-center">
                    <p className="text-lg font-semibold text-white">Screenshots coming soon</p>
                    <p className="mt-2 max-w-md text-sm text-zinc-400">
                      This project is ready to showcase now, and visuals can be added here once you have them.
                    </p>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-4">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-teal-400">Image Carousel</p>
                    <p className="mt-2 text-sm text-zinc-300">{currentImageLabel}</p>
                  </div>
                  {hasImages && imageCount > visibleThumbnailCount && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={gotoPrev}
                        className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                        aria-label="Previous carousel image"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={gotoNext}
                        className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                        aria-label="Next carousel image"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </div>

                {hasImages ? (
                  <>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {visibleThumbnails.map((src, index) => {
                        const imageIndex = thumbnailStart + index;

                        return (
                          <button
                            key={src}
                            type="button"
                            onClick={() => {
                              setActiveImage(imageIndex);
                              resetZoom();
                            }}
                            className={`group overflow-hidden rounded-2xl border p-1 text-left transition ${
                              activeImage === imageIndex
                                ? 'border-teal-500 bg-teal-500/10'
                                : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-600'
                            }`}
                          >
                            <div className="flex h-24 items-center justify-center rounded-xl bg-zinc-950/70">
                              <img
                                src={src}
                                alt={`${project.name} thumbnail ${imageIndex + 1}`}
                                className="h-full w-full object-contain p-1 transition duration-300 group-hover:scale-[1.02]"
                              />
                            </div>
                            <div className="px-2 pb-2 pt-3">
                              <p className="truncate text-xs text-zinc-300">{formatImageLabel(src)}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {imageCount > 1 && (
                      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                        {project.images.map((src, index) => (
                          <button
                            key={`${src}-dot`}
                            type="button"
                            onClick={() => {
                              setActiveImage(index);
                              resetZoom();
                            }}
                            className={`h-2.5 rounded-full transition ${
                              activeImage === index ? 'w-8 bg-teal-400' : 'w-2.5 bg-zinc-600 hover:bg-zinc-400'
                            }`}
                            aria-label={`Show ${formatImageLabel(src)}`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="mt-4 flex justify-center">
                    <span className="rounded-full border border-dashed border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                      Add screenshots later
                    </span>
                  </div>
                )}
              </div>

              {project.detailSections?.map((section) => (
                <div key={section.title} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">{section.title}</h3>
                  {section.description && (
                    <p className="leading-relaxed text-zinc-300">{section.description}</p>
                  )}
                  {section.items && (
                    <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-300">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>

            <div className="min-w-0 space-y-6">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">What I built</h3>
                <ul className="list-inside list-disc space-y-2 text-zinc-300">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">Key tech</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-zinc-800 px-3 py-2 text-sm text-zinc-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">Impact</h3>
                <ul className="list-inside list-disc space-y-2 text-zinc-300">
                  {project.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {project.resultGroups && (
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Results</h3>
                  <div className="space-y-4">
                    {project.resultGroups.map((group) => (
                      <div key={group.name} className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
                          {group.name}
                        </h4>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {group.metrics.map((metric) => (
                            <div key={`${group.name}-${metric.label}`} className="rounded-xl bg-zinc-900 p-3">
                              <p className="text-xs text-zinc-500">{metric.label}</p>
                              <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.findings && (
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Key findings</h3>
                  <ul className="list-inside list-disc space-y-2 text-zinc-300">
                    {project.findings.map((finding) => (
                      <li key={finding}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.limitations && (
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Limitations & improvements</h3>
                  <ul className="list-inside list-disc space-y-2 text-zinc-300">
                    {project.limitations.map((limitation) => (
                      <li key={limitation}>{limitation}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-3">
                {project.codeUnavailable ? (
                  <span
                    className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-500"
                    title="Code unavailable"
                    aria-label="Code unavailable"
                  >
                    <ExternalLink size={16} /> Code unavailable
                  </span>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-teal-400"
                  >
                    <ExternalLink size={16} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <ExternalLink size={16} /> Open Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPopup;
