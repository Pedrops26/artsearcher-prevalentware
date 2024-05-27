import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ArtworkFilterProps {
  artists: string[];
  onFilterChange: (title: string, artist: string) => void;
}

const ArtworkFilter: React.FC<ArtworkFilterProps> = ({
  artists,
  onFilterChange,
}) => {
  const [title, setTitle] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");

  useEffect(() => {
    onFilterChange(title, selectedArtist);
  }, [title, selectedArtist, onFilterChange]);

  return (
    <div className="flex">
      <div className="flex-1 items-center bg-gray-200 p-4 m-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Search by title</AccordionTrigger>
            <AccordionContent>
              <Input
                type="text"
                placeholder="Search by title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex-1 items-center bg-gray-300 p-4 m-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Search by artist</AccordionTrigger>
            <AccordionContent>
              <Input
                type="text"
                placeholder="Search by artist"
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
                list="artists"
              />
              <datalist id="artists">
                {artists.map((artist) => (
                  <option key={artist} value={artist} />
                ))}
              </datalist>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ArtworkFilter;
