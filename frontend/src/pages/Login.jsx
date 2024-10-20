import LoginFrom from "../components/LoginForm";

export default function Login() {


  return <>
  <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-700 ">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 text-green-600">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-gray-900 font-medium title-font">
            </h2>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>

            <p className="mt-4 text-white
            "></p>
          </div>
          <LoginFrom/>
          </div>
          </section>
  </>;
}
