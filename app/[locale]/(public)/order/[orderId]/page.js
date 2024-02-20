"use client";
import Card_Custom from "@/components/Card";
import { useParams } from "next/navigation";

export default function Page() {
  const { orderId } = useParams();
  console.log(orderId);
  return (
    <div>
      <Card_Custom id={orderId} />
    </div>
  );
}
