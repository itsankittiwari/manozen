import { Check } from 'lucide-react';
import Link from "next/link";


export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  bgGradient
}) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative p-8 sm:p-10">
        <div
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
        >
          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        </div>

        <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-relaxed text-base sm:text-lg">
          {description}
        </p>

        <div className="mt-8 space-y-3">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 group/item"
              >
                <div
                  className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300`}
                >
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <Link
              href="/services"
            className={`w-full py-3.5 px-6 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}
      />
      <div
        className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${gradient} opacity-5 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700`}
      />
    </div>
  );
}
