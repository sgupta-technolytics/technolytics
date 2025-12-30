export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 text-center mt-10">
      <p className="text-sm opacity-75">
        © {new Date().getFullYear()} Technolytics — All Rights Reserved.
      </p>
    </footer>
  );
}
