"use client";

import { useState } from "react";
import MarklabButton from "@/components/ui/MarklabButton";
import MarklabImg from "@/components/ui/MarklabImg";
import { processTabs } from "@/lib/data/marklabHome";

export default function ProcessTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="marklab-process marklab-section">
      <div className="marklab-process__container">
        <div className="marklab-process__grid">
          <div className="marklab-process__visual" aria-hidden="true">
            <MarklabImg
              src="/marklab/services/flash.svg"
              alt=""
              width={320}
              height={320}
              className="marklab-process__flash"
            />
            <div className="marklab-process__badge">
              <span className="marklab-process__badge-score">4.9</span>{" "}
              <span className="marklab-process__badge-em">rated delivery partner</span>
            </div>
          </div>

          <div className="marklab-process__content">
            <h2 className="marklab-process__title">
              Digital growth in <span className="marklab-process__title-em">four simple</span> steps
            </h2>

            <div className="marklab-process__tabs" role="tablist" aria-label="Process steps">
              {processTabs.map((tab, i) => {
                const selected = active === i;
                return (
                  <button
                    key={tab.title}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className={`marklab-process__tab${selected ? " marklab-process__tab--active" : ""}`}
                  >
                    <span className="marklab-process__tab-head">
                      <MarklabImg
                        src={tab.image}
                        alt=""
                        width={36}
                        height={36}
                        className="marklab-process__tab-icon"
                      />
                      <span className="marklab-process__tab-title">{tab.title}</span>
                    </span>
                    {selected ? <span className="marklab-process__tab-body">{tab.body}</span> : null}
                  </button>
                );
              })}
            </div>

            <MarklabButton href="#contact" variant="brand" className="marklab-process__cta">
              Send inquiry
            </MarklabButton>
          </div>
        </div>
      </div>
    </section>
  );
}
