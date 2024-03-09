import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const HomePage = () => (
  <div className="flex h-screen flex-col items-center justify-center max-sm:space-y-4 sm:flex-row sm:space-x-4">
    <div className="flex flex-col items-center sm:items-end">
      <div className="text-center text-4xl text-neutral-100">Chris Wagner</div>
      <div className="text-center font-thin text-neutral-500">
        Full-Stack Software Engineer
      </div>
    </div>
    <div className="flex flex-row items-center space-x-4">
      <IconLink
        icon={faGithub}
        className="hover:text-rose-500 active:text-rose-500"
        url="https://www.github.com/cswagner"
      />
    </div>
  </div>
)

const IconLink = ({
  icon,
  className,
  url,
}: {
  icon: FontAwesomeIconProps['icon']
  className: string
  url: string
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon
      className={`${className} duration-250 h-8 w-8 text-neutral-100 transition ease-in-out hover:scale-125 active:scale-125`}
      icon={icon}
    />
  </a>
)

export default HomePage
