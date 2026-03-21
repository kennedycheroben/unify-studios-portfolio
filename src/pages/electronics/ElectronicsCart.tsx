import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ElectronicsCart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <ShoppingCart size={64} style={{ color: "#e2e8f0" }} className="mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Your Cart is Empty</h1>
        <p className="text-sm mb-8" style={{ color: "#64748b" }}>Looks like you haven't added any items yet.</p>
        <Link to="/electronics-shop/products" className="inline-block px-8 py-3 rounded-lg text-sm font-semibold" style={{ background: "#0ea5e9", color: "#fff", textDecoration: "none" }}>
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Shopping Cart ({totalItems})</h1>
        <button onClick={() => { clearCart(); toast.info("Cart cleared"); }} className="text-xs font-semibold" style={{ color: "#ef4444" }}>
          Clear All
        </button>
      </div>

      <div className="space-y-4 mb-10">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 p-4 rounded-xl border"
            style={{ borderColor: "#e2e8f0", background: "#fff" }}
          >
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-sm font-bold mt-1" style={{ color: "#0ea5e9" }}>{item.price}</p>
              <div className="flex items-center gap-3 mt-3">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full border flex items-center justify-center" style={{ borderColor: "#e2e8f0" }}>
                  <Minus size={12} />
                </button>
                <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full border flex items-center justify-center" style={{ borderColor: "#e2e8f0" }}>
                  <Plus size={12} />
                </button>
              </div>
            </div>
            <button onClick={() => { removeItem(item.id); toast.info("Item removed"); }} style={{ color: "#ef4444" }}>
              <Trash2 size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
        <div className="flex justify-between mb-4">
          <span className="text-sm" style={{ color: "#64748b" }}>Subtotal</span>
          <span className="text-sm font-bold">{totalPrice}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-sm" style={{ color: "#64748b" }}>Delivery</span>
          <span className="text-sm font-bold" style={{ color: "#0ea5e9" }}>Free (above KES 10,000)</span>
        </div>
        <div className="border-t pt-4 flex justify-between" style={{ borderColor: "#e2e8f0" }}>
          <span className="font-bold">Total</span>
          <span className="font-bold text-lg" style={{ color: "#0ea5e9" }}>{totalPrice}</span>
        </div>
        <button
          onClick={() => toast.success("Order placed successfully! 🎉")}
          className="w-full mt-6 px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          style={{ background: "#0ea5e9", color: "#fff" }}
        >
          Proceed to Checkout
        </button>
      </div>

      <Link to="/electronics-shop/products" className="flex items-center gap-2 mt-6 text-sm font-semibold" style={{ color: "#0ea5e9", textDecoration: "none" }}>
        <ArrowLeft size={14} /> Continue Shopping
      </Link>
    </section>
  );
};

export default ElectronicsCart;
