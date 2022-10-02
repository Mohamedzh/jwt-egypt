import axios from 'axios'
import { SanityClient } from 'next-sanity'

export const validateData = (getClient: (usePreview: any) => SanityClient) => {
    getClient(false).listen(
        `*[_type == "siteTheme"]`).subscribe(() => { axios.get("/api/revalidate") })

}

export const scrollToSection = (element: string) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }