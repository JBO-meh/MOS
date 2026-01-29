import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white  "> 
        <p className="text-sm flex justify-center ">
          &copy; {new Date().getFullYear()} Map of Saints. All rights reserved.
        </p>
    </footer>
  );
}

