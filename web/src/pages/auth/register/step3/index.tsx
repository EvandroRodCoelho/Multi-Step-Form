import { Link } from "react-router-dom";
import { Steps } from "../../../../components/register/steps";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { useStep3 } from"./useStep3";

export function Step3() {
  const { handleSubmit, submit, errors, register } = useStep3();

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <h2 className="sr-only">Steps</h2>
        <Steps currentStep={3} />
      </div>
      <header className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Social Profiles</h1>
      </header>
      <form
        action=""
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit(submit)}
      >
        <div>
          <label htmlFor="linkedinURl" className="sr-only">
            Linkedin
          </label>

          <div className="relative">
            <input
              type="url"
              data-error={errors.urlLinkedin}
              className={`w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border border-zinc-800 data-[error]:border-red-500`}
              placeholder="Enter a Linkedin URL"
              id="linkedinURl"
              {...register("urlLinkedin")}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <AiOutlineLinkedin
                data-error={errors.urlLinkedin}
                className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`}
              />
            </span>
          </div>
          {errors.urlLinkedin && (
            <p role="alert" title="Linkedin URL invalid" className="text-sm text-red-500 ">
              {errors.urlLinkedin.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="GithubURl" className="sr-only">
            Github
          </label>

          <div className="relative">
            <input
              type="url"
              data-error={errors.urlGitHub}
              className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
              placeholder="Enter a GitHub URL"
              id="GithubURl"
              {...register("urlGitHub")}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <AiOutlineGithub
                data-error={errors.urlGitHub}
                className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`}
              />
            </span>
          </div>
          {errors.urlGitHub && (
            <p role="alert" title="GitHub URL invalid" className="text-sm text-red-500 ">
              {errors.urlGitHub.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link
            to="/register/step2"
            className="inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white"
          >
            Previous step
          </Link>
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}
