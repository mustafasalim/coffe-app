import Button from "../../components/button"
import CoffeAll from "../../components/coffe"

function Home() {
  return (
    <>
      <img
        src="./images/bg-cafe.jpg"
        alt=""
      />
      <div className="h-screen s w-full flex items-center justify-center">
        <div className="absolute sm:w-[600px]  mt-40 top-0 lg:w-[1550px] shadow-md rounded-3xl bg-[#1B1D1F] z-10">
          <div className="w-full flex items-center justify-center">
            <div className="w-[1300px] relative h-[300px] flex items-start justify-center">
              <div className="absolute mt-10 sm:right-0 right-[400px]">
                <svg
                  width="257"
                  height="153"
                  viewBox="0 0 257 153"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04"
                    stroke="#302522"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div className="gird text-center items-center justify-center gap-2 mt-20 z-20">
                <div className="text-[40px] font-bold text-[#FEF7EE]">
                  Our Collection
                </div>
                <div className="text-[#6F757C] tracking-wide text-center font-semibold w-[500px]">
                  Introducing our Coffe Collection, a selection of unique
                  coffees from different roast types and origins, ezpertly
                  roasted in small batches and shipped fresh weekly
                </div>
                <div className="flex items-center justify-center gap-x-6 mt-5">
                  <Button
                    variant="gray"
                    text="All Products"
                  />
                  <Button
                    variant="normal"
                    text="Available Now"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CoffeAll />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
