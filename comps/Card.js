import Image from "next/image"
import Link from "next/link"

export default function Card({ post }) {
  const { title, slug, thumbnail } = post.fields

  return (
    <div className="cardContainer">
      <Link href={`/blog/${slug}`}>
        <a>
          <Image
            className="cardImg"
            src={`https:${thumbnail.fields.file.url}`}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
          />
          <div className="textContainer">
            <h3>{title}</h3>
            <p>{slug}</p>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .cardContainer {
          display: flex;
          flex-direction: column;
          background-color: #eee;
          border: 1px solid #000;
          border-radius: 0.25rem;
          overflow: hidden;
        }
        .textContainer {
          padding: 0.1rem 0.5rem;
        }
      `}</style>
    </div>
  )
}
