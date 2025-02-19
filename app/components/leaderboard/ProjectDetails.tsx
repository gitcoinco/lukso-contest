"use client";

import React from "react";
import { Globe, Twitter, MessageCircle, ExternalLink } from "lucide-react";
import { Project } from "../../types/leaderboard";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="p-4 bg-surface">
      {/* Description */}
      {project.description && (
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>
      )}

      {/* Social Links */}
      <div className="flex flex-wrap gap-4 text-sm mb-4">
        {project.twitter && (
          <a
            href={project.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#1DA1F2] hover:opacity-80 transition-opacity"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Contract Info */}

    </div>
  );
}
