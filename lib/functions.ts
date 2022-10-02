import axios from 'axios'
import { SanityClient } from 'next-sanity'

export const validateHomePage = (getClient: (usePreview: any) => SanityClient, path: { path: string }) => {
    getClient(false).listen(
        `*[_type == "siteTheme"]`).subscribe(() => { axios.post("/api/revalidate", path) })
    getClient(false).listen(
        `*[_type == "header"]`).subscribe(() => { axios.post("/api/revalidate", path) })
    getClient(false).listen(
        `*[_type == "navbarTheme"]`).subscribe(() => { axios.post("/api/revalidate", path) })
}

export const validateStories = (getClient: (usePreview: any) => SanityClient, path: { path: string }) => {
    getClient(false).listen(
        `*[_type == "story"]`).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(
        `*[_type == "siteTheme"]`).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(
        `*[_type == "navbarTheme"]`).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(`*[_type == "contactUs"]`).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(
        `*[_type == "quote"]`).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(
        `*[_type == "person"]`).subscribe(() => { axios.post("/api/revalidate", path) })
}

export const validateCareers = (getClient: (usePreview: any) => SanityClient, path: { path: string }) => {
    getClient(false).listen(
        `*[_type == "job"]{location, title, type, details}`
    ).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(
        `*[_type == "siteTheme"]`).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(
        `*[_type == "navbarTheme"]`).subscribe(() => { axios.post("/api/revalidate", path) })

    getClient(false).listen(`*[_type == "contactUs"]`).subscribe(() => { axios.post("/api/revalidate", path) })
}

export const scrollToSection = (element: string) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}