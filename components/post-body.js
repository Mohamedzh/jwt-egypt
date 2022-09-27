import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'

export default function PostBody({ content }) {
  return (
    <div className={`${markdownStyles.markdown} mx-auto max-w-2xl`}>
      <PortableText value={content} />
    </div>
  )
}
