function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <textarea rows="5" placeholder="Message"></textarea>

          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;