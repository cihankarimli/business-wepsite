import { useForm } from "react-hook-form";

export default function FormComponents() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);
      // API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset(); // Form-u təmizlə
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      <div>
        <label
          className="block text-white font-medium"
          style={{
            fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
            marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
            letterSpacing: "0.05em",
            fontWeight: "500",
          }}
        >
          NAME
        </label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
          placeholder="Enter your name"
          className="w-full bg-[#0F0F0F] border border-[#262626] rounded-xl text-white placeholder-[#676665] focus:outline-none focus:border-[#CE7D63] focus:ring-1 focus:ring-[#CE7D63] transition-all duration-300 hover:border-[#333333]"
          style={{
            padding: "clamp(0.75rem, 3vw, 1rem)",
            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
            minHeight: "clamp(3rem, 8vw, 3.5rem)",
          }}
        />
        {errors.name && (
          <p
            className="text-[#CE7D63] font-medium"
            style={{
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              marginTop: "clamp(0.375rem, 1vw, 0.5rem)",
            }}
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          className="block text-white font-medium"
          style={{
            fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
            marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
            letterSpacing: "0.05em",
            fontWeight: "500",
          }}
        >
          EMAIL
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is invalid",
            },
          })}
          placeholder="Enter your email"
          className="w-full bg-[#0F0F0F] border border-[#262626] rounded-xl text-white placeholder-[#676665] focus:outline-none focus:border-[#CE7D63] focus:ring-1 focus:ring-[#CE7D63] transition-all duration-300 hover:border-[#333333]"
          style={{
            padding: "clamp(0.75rem, 3vw, 1rem)",
            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
            minHeight: "clamp(3rem, 8vw, 3.5rem)",
          }}
        />
        {errors.email && (
          <p
            className="text-[#CE7D63] font-medium"
            style={{
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              marginTop: "clamp(0.375rem, 1vw, 0.5rem)",
            }}
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          className="block text-white font-medium"
          style={{
            fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
            marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
            letterSpacing: "0.05em",
            fontWeight: "500",
          }}
        >
          YOUR QUESTION
        </label>
        <textarea
          {...register("text", {
            required: "Question is required",
            minLength: {
              value: 8,
              message: "Question must be at least 8 characters",
            },
          })}
          placeholder="Enter your question here..."
          rows={4}
          className="w-full bg-[#0F0F0F] border border-[#262626] rounded-xl text-white placeholder-[#676665] focus:outline-none focus:border-[#CE7D63] focus:ring-1 focus:ring-[#CE7D63] transition-all duration-300 resize-none hover:border-[#333333]"
          style={{
            padding: "clamp(0.75rem, 3vw, 1rem)",
            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
            minHeight: "clamp(5rem, 15vw, 7rem)",
            lineHeight: "clamp(1.4, 1.5, 1.6)",
          }}
        />
        {errors.text && (
          <p
            className="text-[#CE7D63] font-medium"
            style={{
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              marginTop: "clamp(0.375rem, 1vw, 0.5rem)",
            }}
          >
            {errors.text.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#CE7D63] text-[#0F0F0F] font-semibold rounded-xl hover:bg-[#B86B54] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
        style={{
          padding: "clamp(0.875rem, 3vw, 1rem)",
          fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
          minHeight: "clamp(3rem, 8vw, 3.5rem)",
          letterSpacing: "0.025em",
          fontWeight: "600",
          marginTop: "clamp(0.75rem, 2vw, 1rem)",
        }}
      >
        {isSubmitting ? "Sending..." : "SEND YOUR MESSAGE"}
      </button>
    </form>
  );
}
