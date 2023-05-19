import { Button } from "react-daisyui"

export default function App () {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 h-[100vh] space-y-5">
        <h1 className="text-6xl font-extrabold">
          Welcome to React + Parcel
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <Button color="primary" className="shadow-md shadow-blue-700" href="https://react.dev">
            Learn React
          </Button>
          <Button color="success" className="shadow-md shadow-blue-700" href="https://github.com/muhreezky">
            Visit My Github
          </Button>
        </div>
      </div>
    </>
  )
}