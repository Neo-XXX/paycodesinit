export default function Card({ as: Tag = 'div', children, className = '', ...props }) {
  return (
    <Tag className={`bg-white rounded-xl shadow border border-gray-200 p-6 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
