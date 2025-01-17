export function Tools() {
    const features = [
      {
        icon: "🤳🏻",
        title: "Snap or Upload Your Photo",
        description: "Take a full-body photo or upload an existing one. Our AI analyzes your measurements for precise, personalized recommendations."
      },
      {
        icon: "📱",
        title: "Paste the Link, See the Look",
        description: "Simply paste a product link to instantly see how it looks on you. Our virtual try-on eliminates guesswork in online shopping."
      },
      {
        icon: "👗",
        title: "Get Your Best Recommendations",
        description: "Receive tailored size, color, and fit suggestions. Explore personalized style recommendations that match your preferences."
      }
    ]
  
    return (
      <section className="container px-4 py-16 bg-purple-50">
        <h3 className="text-2xl font-semibold text-center mb-8">
          All the Tools You Need for Smarter Shopping
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  