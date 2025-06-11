// ImageCard.jsx
export default function ImageCard({ image, title, description }) {
  return (
    <div className="max-w-sm rounded-2xl border border-black bg-transparent overflow-hidden transition-all duration-300 hover:border-white hover:shadow-xl group">
      <img
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
