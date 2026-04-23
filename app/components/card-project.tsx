"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectDetail {
  images: string[];
  title: string;
  description: string;
  icons: { icon: string; name: string }[];
  link: string;
  tag: string;
}

interface Project {
  name: string;
  description: string;
  details: ProjectDetail[];
  tags: string[];
}

interface CardProjectProps {
  project: Project;
  projectIndex: number;
}

export function CardProject({ project, projectIndex }: CardProjectProps) {
  const router = useRouter();
  
  // Get the first image from the first detail that has images
  const firstImage = project.details[0]?.images[0] || "/placeholder.jpg";
  
  // Get the main link from the first detail
  const mainLink = project.details[0]?.link || "";

  const handleClick = () => {
    router.push(`/projects/${projectIndex}`);
  };

  return (
    <Card 
      onClick={handleClick}
      className="group cursor-pointer bg-stone-900/50 border  border-stone-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={firstImage}
          alt={project.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover px-4 rounded-xl transition-transform opacity-60 duration-300 group-hover:scale-120 group-hover:opacity-100"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="leading-relaxed text-emerald-400 text-sm">{project.description}</p>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs border-emerald-600 text-emerald-200">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 w-full">
          {mainLink && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <a href={mainLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Proyecto
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}