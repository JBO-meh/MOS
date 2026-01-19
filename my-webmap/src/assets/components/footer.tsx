import React from "react";

const footerStyle: React.CSSProperties = {
  background: "#f8f9fa",
  borderTop: "1px solid #e9ecef",
  padding: "12px 16px",
  fontSize: "14px",
  color: "#495057",
};

const containerStyle: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  flexWrap: "wrap",
};

const linkStyle: React.CSSProperties = {
  color: "#495057",
  textDecoration: "none",
  marginLeft: 12,
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={footerStyle} role="contentinfo">
      <div style={containerStyle}>
        <div>
          <strong>My Webmap</strong> © {year}
        </div>
        <div>
          <a href="/privacy" style={linkStyle}>
            Privacy
          </a>
          <a href="/terms" style={linkStyle}>
            Terms
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;