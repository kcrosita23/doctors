// ImageCard.jsx
export default function ImageCard({ image, title, description }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img className="w-full h-80 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}