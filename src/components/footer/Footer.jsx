export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-20 bg-gc1 relative">
      <p className="font-thin">
        Copyright &copy; {new Date().getFullYear()}. All rights are reserved
      </p>
    </footer>
  );
}
