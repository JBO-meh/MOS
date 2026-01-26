import { Container } from "react-bootstrap";
import "../styles/footer.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



export default function Footer() {
  return (
    <div className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Map of Saints. All rights reserved.
      </p>
      <Breadcrumb>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          who are we ?
        </Breadcrumb.Item>
        <Breadcrumb.Item active> report bug </Breadcrumb.Item>
        <Breadcrumb.Item active> error in data ?</Breadcrumb.Item>
        <Breadcrumb.Item active> contact us</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

