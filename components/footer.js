export default function Footer() {
  return (
    <footer className="fw3">
      <div>
        <p>+1 (813) 575-4532</p>
        <a href={`mailto:villaparadiso@ariesliving.com`}>
          villaparadiso@ariesliving.com.com
        </a>
      </div>
      <div>
        Copyright © {`${new Date().getFullYear()}`} Aries Living YT LLC, Inc.
        All rights reserved.
      </div>
      <div>
        <p>1415 Collins Ave</p>
        <p>Miami Beach, FL 33139</p>
      </div>

      <style jsx>
        {`
          footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            text-align: center;
            left: 0;
            bottom: 0;
            width: 100%;
            border-top: 1px solid var(--fg);
          }
        `}
      </style>
    </footer>
  );
}
