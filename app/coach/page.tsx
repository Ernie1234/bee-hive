import { ModalBtns } from "@/components/modal/ModalBtns";

export default function page() {
  return (
    <div className="text-center text-4xl h-dvh max-h-screen">
      <div className="relative w-full h-full">
        <video
          src="https://assets.mixkit.co/videos/36460/36460-720.mp4"
          // type="video/mp4"
          controls={false}
          muted
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col md:flex-row justify-center items-center top-0 left-0 right-0 bottom-0 bg-slate-950/90">
          <div className="w-full order-2 md:order-1 md:flex-1 flex flex-col justify-start items-center gap-4">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-medium font-primary text-center max-w-prose">
              Welcome to the Hive Incubator <br />
              Coach App!
            </h1>
            <p className="text-lg md:text-3xl text-left font-medium font-primary">
              Empowering Entrepreneurs for a Brighter Tomorrow
            </p>
            <ModalBtns />
          </div>
          <div className="hidden md:flex w-full order-1 md:order-2 md:w-3/12 p-6 flex-col gap-3 bg-gray-300/20 backdrop-blur-md h-full justify-center items-center md:items-start shadow-md">
            <h1 className="text-3xl font-medium font-primary text-left">
              Hive Incubator Coach
            </h1>
            <p className="text-base text-left font-medium font-primary">
              Your One-Stop Solution for Business Success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
