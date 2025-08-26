// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-10 py-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} NeuroBalance — All rights reserved.
    </footer>
  );
}

