// app/your-page/loading.tsx

import LoadingSpinner from "@/components/ui/loading_spinner";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <LoadingSpinner label="Getting Your Dragon.." style={{ flexDirection: "column" }} size={38} />
    </div>
  );
}
