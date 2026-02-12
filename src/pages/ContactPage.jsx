import GoogleForm from '../components/GoogleForm.jsx';

const ContactPage = () => {
  return (
    <main className="bg-gray-50 px-4 py-16">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-900">Contact</h1>

        <p className="mt-4 text-gray-700">
          Interested in working together or have a question about one of my
          projects? Send a message below.
        </p>

        <div className="mt-10">
          <GoogleForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
