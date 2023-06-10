import Image from "next/image";
import Form from "./components/form/Form";
import Steps from "./components/Steps";
import Summary from "./components/Summary";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <div className="flex flex-col bg-white rounded-xl max-md:items-center shadow-xl md:flex-row md:gap-8 md:p-3 max-md:mx-6 max-md:mt-10 max-md:absolute top-[92.5px]">
        <div className="flex flex-row md:flex-col">
          <div className="md:w-[280px] md:h-[580px] flex transition-all relative">
            <Image
              src={"/assets/images/bg-sidebar-desktop.svg"}
              alt="bg-sidebar-desktop"
              fill
              className="hidden sm:block"
            />
          </div>
        </div>
        <Image
          src={"/assets/images/bg-sidebar-mobile.svg"}
          alt="bg-sidebar-mobile"
          width={900}
          height={250}
          className="md:hidden fixed inset-0 -z-10"
        />
        <Steps />

        <Form />
        <Summary />
      </div>
    </div>
  );
}
