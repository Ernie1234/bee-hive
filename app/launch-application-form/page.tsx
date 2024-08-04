import LauchForm from "@/components/LauchForm";

export default function page() {
  return (
    <div className="flex w-full py-8">
      <div className="mx-auto max-w-4xl w-full bg-gray-900/50 border-t-4 border-gray-900 p-8 rounded-xl">
        <LauchForm />
      </div>
    </div>
  );
}
