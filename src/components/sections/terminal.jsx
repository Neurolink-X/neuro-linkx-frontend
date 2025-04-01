export default function Terminal() {
    return (
      <section className=&quot;py-20 px-4 bg-slate-900&quot;>
        <div className=&quot;container mx-auto max-w-7xl&quot;>
          <div className=&quot;max-w-3xl mx-auto&quot;>
            <div className=&quot;bg-slate-800 rounded-lg overflow-hidden&quot;>
              <div className=&quot;flex items-center gap-2 px-4 py-3 bg-slate-700&quot;>
                <div className=&quot;h-3 w-3 rounded-full bg-red-500&quot; />
                <div className=&quot;h-3 w-3 rounded-full bg-yellow-500&quot; />
                <div className=&quot;h-3 w-3 rounded-full bg-green-500&quot; />
              </div>
              <div className=&quot;p-6&quot;>
                <pre className=&quot;text-slate-300 font-mono&quot;>
                  <code>{`$ npm install @company/cli
  Installing dependencies...
  Success! Ready to ship 🚀`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  