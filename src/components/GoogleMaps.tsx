import React from "react";

interface GoogleMapsProps {
  height?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ height = "400px" }) => {
  return (
    <div style={{ width: "100%", height }}>
      <iframe
        title="Italy Buses - Rome Office Location"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.5588988150308!2d12.494571969643513!3d41.88779009659324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b7f7a76af3%3A0x5e3b544c88796d78!2sVia%20Annia%2C%2026%2C%2000184%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sae!4v1762421806004!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
