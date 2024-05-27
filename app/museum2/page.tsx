"use client";

import React, { useEffect, useState } from "react";

interface Artwork {
  id: string;
  title: string;
  principalOrFirstMaker: string;
  webImage: {
    url: string;
  };
}

async function getData() {
  const res = await fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=KHn4xrLx"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Page() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData()
      .then((data) => {
        setArtworks(data.artObjects);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <h1>Artworks by Rembrandt van Rijn</h1>
      <div className="artworks-container">
        {artworks.map((artwork: Artwork) => (
          <div key={artwork.id} className="artwork">
            <h2>{artwork.title}</h2>
            <br />
            <p>{artwork.principalOrFirstMaker}</p>
            <br />
            <img src={artwork.webImage.url} alt={artwork.title} />
            <br />
            <a href={artwork.webImage.url}>Link</a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .artworks-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .artwork {
          border: 1px solid #ccc;
          padding: 10px;
          max-width: 200px;
        }
      `}</style>
    </main>
  );
}
