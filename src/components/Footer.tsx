import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='col-7'> 2021 HilalBuyukgullu All Rights Reserved.</div>
      <div className='col-5 social-media-icon'>
        <Link href="https://www.instagram.com/hilalbuyukgullu/" target={"_blank"}><IconButton color="primary">
          <InstagramIcon />
        </IconButton></Link>
        <Link href="https://github.com/hilalbuyukgullu" target={"_blank"}><IconButton color="primary">
          <GitHubIcon />
        </IconButton></Link>
        <Link href="https://www.linkedin.com/in/hilal-buyukgullu/" target={"_blank"}><IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
        </Link>
      </div>
    </div>
  )
}
