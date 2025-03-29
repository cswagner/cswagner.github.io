import Head from 'next/head'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => (
  <div>
    <Head>
      <title>Chris Wagner</title>
      <meta
        name="description"
        content="Profile for Chris Wagner, full-stack software engineer"
      />
    </Head>
    <div className="flex h-screen flex-col lg:flex-row">
      <div className="flex justify-center p-8 lg:items-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col">
            <div className="text-center text-4xl text-neutral-100">
              Chris Wagner
            </div>
            <div className="text-center font-thin text-neutral-400">
              Full-Stack Software Engineer
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <IconLink
              icon={faGithub}
              className="hover:text-rose-500 active:text-rose-500"
              url="https://www.github.com/cswagner"
              ariaLabel="GitHub"
            />
            <IconLink
              icon={faLinkedinIn}
              className="hover:text-blue-500 active:text-blue-500"
              url="https://www.linkedin.com/in/cswagner"
              ariaLabel="LinkedIn"
            />
            <IconLink
              icon={faEnvelope}
              className="hover:text-emerald-500 active:text-emerald-500"
              url="mailto:contact@cswagner.io"
              ariaLabel="Email"
            />
          </div>
        </div>
      </div>
      <div className="lg:px0 flex flex-1 flex-col gap-4 overflow-y-scroll px-8 lg:px-0 lg:pe-8">
        <div className="hidden min-h-4 flex-1 lg:flex" />
        {/* TODO: Add blog post here */}
        <div className="flex min-h-4 flex-1" />
      </div>
    </div>
  </div>
)

const IconLink = ({
  icon,
  className,
  url,
  ariaLabel,
}: {
  icon: FontAwesomeIconProps['icon']
  className: string
  url: string
  ariaLabel: string
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon
      className={`${className} duration-250 h-8 w-8 text-neutral-100 transition ease-in-out hover:scale-125 active:scale-125`}
      icon={icon}
    />
  </a>
)

export default HomePage
