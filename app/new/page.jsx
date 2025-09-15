import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image
        className="dark:invert w-full"
        src="/footer.png"
        fill
        alt="Next.js logo"
        priority
      />

    </div>
  )
}

export default page
