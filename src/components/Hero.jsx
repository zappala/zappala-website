export function Hero(props) {
  return (
    <div className="bg-[url('/images/timp1.jpeg')] bg-center bg-no-repeat bg-cover relative h-96 flex justify-center">
      <div className=" text-white text-center">
        <a href="https://calendly.com/daniel-zappala">
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Schedule an appointment
          </button>
        </a>
      </div>
    </div>
  );
}
