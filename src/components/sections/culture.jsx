export default function Culture() {
    return (
      <section className=&quot;py-20 px-4 relative&quot;>
        <div
          className=&quot;absolute inset-0 bg-[url(&apos;/placeholder.svg?height=600&width=1200&apos;)] bg-cover bg-center&quot;
          style={{ opacity: 0.1 }}
        />
        <div className=&quot;container mx-auto relative&quot;>
          <h2 className=&quot;font-mono text-6xl md:text-8xl font-bold text-black text-center mb-12 tracking-tight&quot;>CULTURE</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl font-bold text-red-500 mb-2&quot;>98%</div>
              <p className=&quot;text-slate-400&quot;>Customer Satisfaction</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl font-bold text-red-500 mb-2&quot;>24/7</div>
              <p className=&quot;text-slate-400&quot;>Support Available</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl font-bold text-red-500 mb-2&quot;>150+</div>
              <p className=&quot;text-slate-400&quot;>Countries Served</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  