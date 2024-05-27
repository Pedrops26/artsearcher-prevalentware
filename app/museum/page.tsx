"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArtworkFilter from "./Filter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Artwork {
  id: string;
  title: string;
  longTitle: string;
  webImage: {
    url: string;
  };
  principalOrFirstMaker: string;
  objectNumber: string;
}

async function getData() {
  const res = await fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=KHn4xrLx&ps=50"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Page() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [artists, setArtists] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData()
      .then((data) => {
        const artworks: Artwork[] = data.artObjects;
        setArtworks(artworks);
        setFilteredArtworks(artworks);

        const uniqueArtists: string[] = Array.from(
          new Set(
            artworks.map((artwork: Artwork) => artwork.principalOrFirstMaker)
          )
        );
        setArtists(uniqueArtists);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleFilterChange = (title: string, artist: string) => {
    const filtered = artworks.filter(
      (artwork) =>
        artwork.title.toLowerCase().includes(title.toLowerCase()) &&
        artwork.principalOrFirstMaker
          .toLowerCase()
          .includes(artist.toLowerCase())
    );
    setFilteredArtworks(filtered);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="bg-repeat bg-center min-h-screen w-screen"
      style={{
        backgroundImage:
          "url(https://sothebys-com.brightspotcdn.com/dims4/default/06a9b0f/2147483647/strip/true/crop/1000x819+0+0/resize/684x560!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F0b%2Fe6%2F34e35a261f9cd1013a8625057cef%2Fproxy.jpg)",
      }}
    >
      <title>Searcher</title>
      <div>
        <ArtworkFilter artists={artists} onFilterChange={handleFilterChange} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {filteredArtworks.map((artwork: Artwork) => (
          <div key={artwork.id} className="max-w-xs">
            <Card>
              <CardHeader>
                <Image
                  src={artwork.webImage.url}
                  alt={artwork.title}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <CardTitle>{artwork.title}</CardTitle>
                <CardDescription>
                  {artwork.principalOrFirstMaker}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={`https://www.rijksmuseum.nl/nl/collectie/${artwork.objectNumber}`}
                  className="text-small underline"
                >
                  Link
                </a>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
