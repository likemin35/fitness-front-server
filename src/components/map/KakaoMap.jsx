/* src/components/map/KakaoMap.jsx */
import React, { useEffect, useRef } from "react";

const KakaoMap = ({ markers = [] }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    if (!kakao || !kakao.maps) return;

    kakao.maps.load(() => {
      if (!mapRef.current) return;

      const center = markers.length
        ? new kakao.maps.LatLng(markers[0].lat, markers[0].lon)
        : new kakao.maps.LatLng(37.5665, 126.9780);

      const map = new kakao.maps.Map(mapRef.current, {
        center,
        level: 6,
      });

      markers.forEach((m) => {
        if (!m.lat || !m.lon) return;

        const pos = new kakao.maps.LatLng(m.lat, m.lon);

        const marker = new kakao.maps.Marker({
          position: pos,
          map,
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:13px;">${m.name}</div>`,
        });

        kakao.maps.event.addListener(marker, "mouseover", () =>
          infowindow.open(map, marker)
        );
        kakao.maps.event.addListener(marker, "mouseout", () =>
          infowindow.close()
        );
      });
    });
  }, [markers]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "450px", borderRadius: "10px" }}
    />
  );
};

export default KakaoMap;
