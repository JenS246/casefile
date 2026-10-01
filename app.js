const CASES = [
  {
    id: "reed",
    title: "Reed v. Harbor Market",
    type: "Premises Liability",
    phases: ["Intake", "Notice", "Complaint", "Answer", "Discovery", "Deposition", "Motion", "Order", "Closing"],
    facts() {
      const incident = pick([
        { date: "October 14, 2025", time: "4:15 p.m.", wrongTime: "5:15 p.m.", item: "a leaking floral cooler", injury: "a fractured left wrist", aisle: "the produce aisle" },
        { date: "November 6, 2025", time: "6:40 p.m.", wrongTime: "6:10 p.m.", item: "a leaking freezer case", injury: "a sprained right knee", aisle: "aisle seven" },
        { date: "September 22, 2025", time: "2:25 p.m.", wrongTime: "3:25 p.m.", item: "a broken bottle of cooking oil", injury: "a fractured right ankle", aisle: "the international foods aisle" }
      ]);
      return { ...incident, client: pick(["Nora Reed", "Elena Reed", "Camille Reed"]), witness: pick(["Devon Price", "Marisol Vega", "Anton Mills"]), manager: pick(["Helen Cho", "Marcus Bell", "Rina Shah"]), amount: pick(["$18,460", "$21,875", "$16,920"]), deadline: pick(["March 18, 2026", "April 2, 2026", "February 27, 2026"]), store: "Harbor Market", address: pick(["1840 Willow Street", "72 Fairview Avenue", "611 Harbor Road"]) };
    },
    documents: [
      ["Intake", "Client Intake Note", `{{client}} reports that she fell near {{item}} at {{store}}, {{address}}, on {{date}} at about {{time}} She landed on her left side and was taken to urgent care. Imaging showed {{injury}}. She recalls no warning cone in the area. A shopper, {{witness}}, helped her stand and gave her a telephone number. Medical charges currently total {{amount}}. The client saved her receipt and photographs taken shortly after the fall.`],
      ["Notice", "Preservation Letter", `Please preserve all video, photographs, inspection logs, cleaning records, incident reports, and employee communications concerning the fall involving {{client}} at {{store}} on {{date}}. The incident occurred at approximately {{time}} in {{aisle}}. This request includes footage from two hours before through one hour after the incident. Please suspend any routine deletion policy that would affect this material.`],
      ["Complaint", "Complaint Excerpt", `Plaintiff {{client}} alleges that on {{date}}, at approximately {{time}}, she was lawfully shopping at {{store}}. Liquid from {{item}} had accumulated in {{aisle}}. Defendant knew or should have known of the condition and failed to correct it or provide an adequate warning. Plaintiff fell and sustained {{injury}}, incurred medical expenses of {{amount}}, and continues to experience pain and limited mobility.`],
      ["Answer", "Answer Excerpt", `Defendant {{store}} admits that {{client}} was present at its store on {{date}}, but denies that it had notice of a dangerous condition. Defendant states that employees inspected the sales floor at reasonable intervals. Defendant lacks sufficient information to admit or deny the nature and extent of the claimed injury or medical expenses. All remaining allegations are denied, and strict proof is demanded.`],
      ["Discovery", "Interrogatory No. 6", `Identify every person known to have observed the incident, the condition of the floor, or the events immediately afterward. For each person, state the name, contact information if known, and a brief description of the knowledge believed to be held. The responding party should include employees, customers, emergency personnel, and any person who reviewed video or prepared an incident report.`],
      ["Discovery", "Response to Interrogatory No. 6", `Plaintiff identifies {{witness}}, a customer who was standing near {{aisle}}. {{witness}} observed liquid on the floor after the fall and helped Plaintiff stand. Plaintiff also identifies store manager {{manager}}, who arrived within several minutes and prepared an incident report. Treating medical personnel are identified in the records previously produced. Discovery continues, and Plaintiff reserves the right to supplement this response.`],
      ["Discovery", "Request for Production No. 4", `Produce the inspection log for {{date}}, all surveillance video showing {{aisle}} between 3:00 p.m. and 6:00 p.m., and the incident report prepared by {{manager}}. Also produce any work order or maintenance request concerning {{item}} during the thirty days before the incident. Electronically stored material should be produced in its original format when reasonably available.`],
      ["Deposition", "Witness Statement Excerpt", `{{witness}} stated: “I entered the aisle at about {{wrongTime}} and saw a woman on the floor. There was a wide patch of clear liquid beside her cart. I did not see a cone or employee nearby. A manager arrived after another shopper called for help.” The witness was uncertain how long the liquid had been present and did not see the fall itself.`],
      ["Motion", "Motion Excerpt", `Defendant requests summary judgment, arguing that no evidence shows how long the liquid was present before the fall. Plaintiff responds that the inspection log contains a ninety-minute gap and that the store received a maintenance complaint concerning {{item}} earlier that day. Viewed together, Plaintiff argues, this evidence permits a reasonable inference that Defendant had constructive notice of the condition.`],
      ["Order", "Court Order", `The motion for summary judgment is denied. The inspection gap, maintenance complaint, and witness testimony create factual disputes that must be resolved at trial. The parties shall complete remaining depositions by {{deadline}} and submit a joint pretrial statement fourteen days later. This order does not determine fault. It only concludes that the present record requires further proceedings.`]
    ],
    checks: {
      3: { context: "The intake note and complaint give the incident time as {{time}}", prompt: "Do those documents disagree?", options: ["Date discrepancy", "Time discrepancy", "Party name", "Nothing is inconsistent"], correct: 3, explanation: "Both documents use {{date}} at {{time}}" },
      8: { context: "Earlier documents place the fall at {{time}} The witness statement says {{wrongTime}}", prompt: "What would you flag?", options: ["Date discrepancy", "Time discrepancy", "Medical amount", "Nothing is inconsistent"], correct: 1, explanation: "The witness gives a different time. That difference should be confirmed before the deposition." }
    }
  },
  {
    id: "ortiz",
    title: "Ortiz v. Bell Transit",
    type: "Motor Vehicle Negligence",
    phases: ["Intake", "Claim", "Complaint", "Answer", "Discovery", "Deposition", "Motion", "Order"],
    facts() {
      const collision = pick([
        { date: "January 8, 2026", time: "7:35 a.m.", wrongDate: "January 18, 2026", street: "Pine Street and Ninth Avenue", injury: "a cervical strain" },
        { date: "December 12, 2025", time: "5:20 p.m.", wrongDate: "December 21, 2025", street: "Mercer Road and Clay Avenue", injury: "a lumbar strain" },
        { date: "February 3, 2026", time: "8:10 a.m.", wrongDate: "February 13, 2026", street: "Grand Avenue and Olive Street", injury: "a concussion and shoulder strain" }
      ]);
      return { ...collision, client: pick(["Mateo Ortiz", "Luis Ortiz", "Rafael Ortiz"]), driver: pick(["Sharon Blake", "Imani Foster", "Paula Dunn"]), officer: pick(["Officer Nikhil Rao", "Officer Dana Wu", "Officer Jonah Wells"]), route: pick(["Route 38", "Route 14", "Route 62"]), amount: pick(["$12,780", "$14,235", "$19,640"]), deadline: pick(["May 6, 2026", "May 20, 2026", "June 3, 2026"]) };
    },
    documents: [
      ["Intake", "Client Intake Note", `{{client}} was driving through {{street}} on {{date}} at {{time}} when a {{route}} bus entered the intersection and struck the rear passenger side of his vehicle. He reports {{injury}} and has completed eight physical therapy visits. Current medical charges are {{amount}}. {{client}} photographed both vehicles and obtained the bus number before leaving by ambulance.`],
      ["Claim", "Attorney Claim Letter", `Our office represents {{client}} regarding the collision at {{street}} on {{date}}. Please direct further communications to counsel and preserve onboard video, GPS data, driver logs, dispatch messages, maintenance records, and the personnel file of driver {{driver}}. Bell Transit should also retain any passenger reports and photographs associated with {{route}}.`],
      ["Complaint", "Complaint Excerpt", `Plaintiff {{client}} alleges that Bell Transit employee {{driver}} failed to stop at a red signal while operating {{route}} on {{date}} at approximately {{time}} The bus struck Plaintiff's vehicle at {{street}}. Plaintiff alleges that Bell Transit is responsible for its employee's negligence and seeks compensation for medical expenses, lost wages, property damage, and pain caused by the collision.`],
      ["Answer", "Answer Excerpt", `Bell Transit admits that {{driver}} was acting within the scope of employment and operating {{route}} at the time of the collision. Defendant denies that the bus entered against a red signal and alleges that {{client}} changed lanes within the intersection. Defendant disputes the nature and extent of the claimed injuries and demands proof of each item of damage.`],
      ["Discovery", "Interrogatory No. 9", `State the factual basis for Defendant's allegation that Plaintiff changed lanes within the intersection. Identify every witness, recording, document, or item of physical evidence supporting that allegation. If the allegation depends on a statement by {{driver}}, identify when the statement was made, to whom it was given, and whether it was recorded or reduced to writing.`],
      ["Discovery", "Transit Authority Response", `Defendant relies on the statement of {{driver}} and exterior video from {{route}}. The driver reported that Plaintiff moved from the center lane toward the curb lane. The onboard camera begins twelve seconds before impact and does not show the traffic signal facing the bus. No passenger has provided a statement about Plaintiff's lane position. Defendant will produce the video under the parties' protective agreement.`],
      ["Deposition", "Driver Deposition Excerpt", `{{driver}} testified that the bus entered the intersection on a yellow signal. She first noticed {{client}}'s vehicle near the front door of the bus. She applied the brakes but could not avoid contact. When shown the dispatch log dated {{wrongDate}}, she agreed that it listed the collision under her operator number, but said the date on that entry appeared incorrect.`],
      ["Motion", "Motion in Limine Excerpt", `Plaintiff asks the court to exclude the dispatch entry dated {{wrongDate}} unless Bell Transit supplies a witness who can explain its creation and the incorrect date. Defendant responds that the entry is maintained in the ordinary course of operations and that the date resulted from a clerical error. The parties agree that the collision occurred on {{date}}.`],
      ["Order", "Scheduling Order", `The parties shall complete fact discovery by {{deadline}}. Any motion concerning the admissibility of transit records must be filed at least twenty-one days before trial. Bell Transit shall provide a records custodian for deposition if it intends to rely on the disputed dispatch entry. The case remains listed for a settlement conference after discovery closes.`]
    ],
    checks: {
      4: { context: "The complaint and answer both identify {{driver}} as the operator of {{route}}.", prompt: "What would you flag?", options: ["Driver name", "Bus route", "Collision date", "Nothing is inconsistent"], correct: 3, explanation: "The operator and route match in both pleadings." },
      7: { context: "The case concerns a collision on {{date}}. The dispatch entry shown at deposition is dated {{wrongDate}}.", prompt: "What would you flag?", options: ["Date discrepancy", "Street name", "Medical amount", "Nothing is inconsistent"], correct: 0, explanation: "The dispatch date differs from every other account and requires an explanation." }
    }
  },
  {
    id: "chen",
    title: "Chen v. Keystone Property Group",
    type: "Property Dispute",
    phases: ["Intake", "Demand", "Complaint", "Answer", "Discovery", "Inspection", "Deposition", "Motion", "Order", "Closing"],
    facts() {
      const property = pick([
        { address: "416 Linden Court", date: "August 19, 2025", amount: "$8,950", wrongAmount: "$6,950", defect: "a failed drain line beneath the shared wall" },
        { address: "29 Ashbury Lane", date: "September 7, 2025", amount: "$11,240", wrongAmount: "$11,420", defect: "an uncapped irrigation pipe along the boundary" },
        { address: "805 Juniper Terrace", date: "July 28, 2025", amount: "$7,680", wrongAmount: "$7,860", defect: "a cracked retaining wall drain" }
      ]);
      return { ...property, client: pick(["Lena Chen", "Mei Chen", "Vivian Chen"]), manager: pick(["Owen Mercer", "Talia Brooks", "Gavin Hart"]), contractor: pick(["Northline Restoration", "Cedar Works LLC", "Bayside Remediation"]), deadline: pick(["April 24, 2026", "May 8, 2026", "May 29, 2026"]) };
    },
    documents: [
      ["Intake", "Client Intake Note", `{{client}} owns the townhouse at {{address}}. On {{date}}, water entered the lower level after pooling beside a wall maintained by Keystone Property Group. A plumber identified {{defect}} as the likely source. {{client}} paid {{amount}} to {{contractor}} for drying, damaged flooring, and wall repair. She had reported dampness to property manager {{manager}} twice before the loss.`],
      ["Demand", "Demand Letter", `Keystone Property Group received written notice of repeated dampness beside {{address}} before the water loss on {{date}}. The attached invoice from {{contractor}} totals {{amount}}. Please reimburse that amount and confirm when Keystone will permanently correct {{defect}}. If this matter cannot be resolved, our client will pursue available claims for negligence and property damage.`],
      ["Complaint", "Complaint Excerpt", `Plaintiff {{client}} alleges that Keystone Property Group controlled the common area adjoining {{address}} and failed to repair {{defect}} despite prior notice. Water entered Plaintiff's property on {{date}}, damaging flooring, drywall, and personal property. Plaintiff seeks repair costs of {{amount}} and any additional damages established through discovery.`],
      ["Answer", "Answer Excerpt", `Keystone Property Group admits responsibility for maintaining the common area but denies receiving notice of a defect before {{date}}. Keystone further denies that its property caused all damage claimed by {{client}}. Defendant states that unusually heavy rainfall and conditions within Plaintiff's unit may have contributed to the loss. Defendant demands proof of the repair costs and causation.`],
      ["Discovery", "Request for Production No. 7", `Produce all maintenance requests, inspection reports, emails, photographs, and vendor invoices concerning drainage or moisture near {{address}} during the two years before {{date}}. Include documents held by property manager {{manager}} and records sent to any landscaping, plumbing, or restoration contractor. Produce responsive emails with available attachments and original date information.`],
      ["Discovery", "Document Production Note", `Keystone produced a work-order spreadsheet listing two moisture complaints for {{address}}. The first entry was closed without inspection. The second was assigned to {{manager}} but contains no completion date. A vendor estimate refers to {{defect}} three months before the loss. No repair invoice appears in the production. Counsel should request the missing attachment referenced in the estimate email.`],
      ["Inspection", "Site Inspection Summary", `The parties inspected the common wall and lower level. Efflorescence and staining were visible along the base of the wall. A camera inspection confirmed {{defect}}. Keystone's consultant agreed that water could travel toward {{address}}, but reserved an opinion about the amount of interior damage caused by this event. Samples were photographed and logged by both parties.`],
      ["Deposition", "Property Manager Deposition", `{{manager}} recalled receiving one telephone call from {{client}} about dampness but did not recall the date. After reviewing the work-order spreadsheet, the manager acknowledged that two complaints were recorded. {{manager}} could not identify anyone who inspected the area before {{date}} and agreed that the vendor estimate described the same drainage condition found during the joint inspection.`],
      ["Motion", "Settlement Conference Statement", `{{client}} seeks {{wrongAmount}} for completed restoration work, plus the cost of replacing stored items. Keystone disputes the amount and argues that some flooring was already worn. The parties agree that a permanent drainage repair is needed. They request a conference focused on allocating the restoration invoice and scheduling the common-area repair.`],
      ["Order", "Conference Order", `The parties shall exchange original contractor invoices and photographs by {{deadline}}. Keystone shall obtain a firm proposal for the common-area repair before the settlement conference. Each side must bring a representative with authority to resolve the monetary claim. If the case does not settle, remaining expert discovery will proceed under the existing schedule.`],
      ["Closing", "Closing Note", `The matter resolved after Keystone agreed to perform the drainage repair and reimburse {{client}} for the documented invoice of {{amount}}. Payment is due within thirty days after the signed release is received. Counsel confirmed that the settlement covers property damage through the agreement date but does not transfer responsibility for future maintenance of the common area.`]
    ],
    checks: {
      4: { context: "The intake note, demand, and complaint identify {{address}} and the loss date as {{date}}.", prompt: "What would you flag?", options: ["Address discrepancy", "Date discrepancy", "Owner name", "Nothing is inconsistent"], correct: 3, explanation: "The address and date remain consistent through the early file." },
      9: { context: "The repair invoice is {{amount}}. The settlement statement instead requests {{wrongAmount}}.", prompt: "What would you flag?", options: ["Contractor name", "Amount discrepancy", "Property address", "Nothing is inconsistent"], correct: 1, explanation: "The conference statement uses a different repair amount and should be corrected." }
    }
  },
  {
    id: "miller",
    title: "Miller v. Rowan Construction",
    type: "Contract / Property Damage",
    phases: ["Intake", "Contract", "Notice", "Complaint", "Answer", "Discovery", "Expert", "Deposition", "Motion", "Order"],
    facts() {
      const build = pick([
        { address: "93 Colfax Road", date: "June 4, 2025", amount: "$34,600", wrongDeadline: "November 12, 2025", deadline: "November 21, 2025", defect: "improperly flashed roof joints" },
        { address: "227 Benton Avenue", date: "May 16, 2025", amount: "$28,450", wrongDeadline: "October 9, 2025", deadline: "October 19, 2025", defect: "an unsealed second-floor window assembly" },
        { address: "51 Orchard Place", date: "July 11, 2025", amount: "$41,275", wrongDeadline: "December 2, 2025", deadline: "December 12, 2025", defect: "an incorrectly sloped balcony membrane" }
      ]);
      return { ...build, client: pick(["Avery Miller", "Jordan Miller", "Morgan Miller"]), foreman: pick(["Caleb Rowe", "Priya Nair", "Andre Silva"]), expert: pick(["Dr. Elise Navarro", "Dr. Simon Beck", "Dr. Amara Okafor"]), subcontractor: pick(["West Peak Exteriors", "Stonebridge Envelope Co.", "Summit Weatherproofing"]) };
    },
    documents: [
      ["Intake", "Client Intake Note", `{{client}} hired Rowan Construction to renovate the residence at {{address}}. After heavy rain on {{date}}, water entered an upstairs room and damaged new flooring and built-in cabinetry. A consultant later identified {{defect}}. The current repair estimate is {{amount}}. {{client}} emailed site foreman {{foreman}} photographs and requested an inspection the next morning.`],
      ["Contract", "Contract Excerpt", `Rowan Construction shall perform the renovation in a workmanlike manner and in accordance with applicable building requirements. Written notice of a claimed defect must be provided before another contractor alters the work, except when emergency action is reasonably necessary to prevent further damage. Rowan may inspect a reported condition within five business days after receiving notice.`],
      ["Notice", "Notice of Defect", `This letter provides notice of water intrusion at {{address}} following rain on {{date}}. Our consultant identified {{defect}} in work performed under the renovation agreement. The resulting interior damage is estimated at {{amount}}. Please arrange an inspection within five business days and confirm whether Rowan Construction will correct the exterior condition and affected interior finishes.`],
      ["Complaint", "Complaint Excerpt", `Plaintiff {{client}} alleges that Rowan Construction breached the renovation agreement by installing exterior components in a defective manner. The condition allowed water to enter {{address}} on {{date}} and damage finished interior work. Plaintiff gave prompt written notice and provided access for inspection. Plaintiff seeks repair costs, related professional fees, and other damages proven at trial.`],
      ["Answer", "Answer Excerpt", `Rowan Construction denies that its work caused the reported water entry. Rowan states that {{subcontractor}} performed the exterior installation and that Plaintiff allowed emergency drying before Rowan's inspection. Rowan admits receiving written notice but denies refusing access or repair. Defendant also asserts that the claimed {{amount}} estimate includes upgrades beyond restoration of the original condition.`],
      ["Discovery", "Interrogatory No. 11", `Describe each inspection of the exterior work at {{address}}, including the date, person conducting it, areas reviewed, and findings. Identify all communications with {{subcontractor}} about water management or {{defect}}. State whether Rowan contends that any act by {{client}} caused or increased the damage, and identify the evidence supporting that contention.`],
      ["Expert", "Expert Report Excerpt", `{{expert}} inspected the residence and reviewed construction photographs. The observed staining pattern is consistent with water entering through {{defect}}. Moisture testing did not identify an interior plumbing source. In the expert's opinion, the installation departed from the manufacturer's written instructions. The proposed repair requires removal and replacement of affected exterior and interior materials.`],
      ["Deposition", "Foreman Deposition Excerpt", `{{foreman}} testified that {{subcontractor}} completed the exterior work. The foreman visited the site after the loss and saw staining below the reported defect. He recalled telling {{client}} that Rowan would respond by {{wrongDeadline}}. An email sent that afternoon instead states that a written repair plan would be provided by {{deadline}}.`],
      ["Motion", "Motion to Compel Excerpt", `Plaintiff seeks production of text messages between {{foreman}} and {{subcontractor}} during the week after the loss. Rowan acknowledges that the messages are relevant but states that collection from a former employee's device is ongoing. Plaintiff asks for production by a date certain and for confirmation that the device and cloud backup have been preserved.`],
      ["Order", "Discovery Order", `Rowan Construction shall produce responsive text messages or a written status report within fourteen days. If any messages cannot be recovered, Rowan must describe the search performed and identify the person most knowledgeable about the backup system. The parties shall meet after production to determine whether a supplemental deposition of {{foreman}} is necessary.`]
    ],
    checks: {
      5: { context: "The complaint says {{client}} gave notice and access. The answer admits notice but disputes the scope of the repair estimate.", prompt: "Is there a name or notice inconsistency?", options: ["Client name", "Notice status", "Repair amount", "Nothing is inconsistent"], correct: 3, explanation: "The pleadings disagree about liability, but the client name and fact of notice are consistent." },
      8: { context: "The foreman recalls a response date of {{wrongDeadline}}. The same-day email promises a plan by {{deadline}}.", prompt: "What would you flag?", options: ["Deadline discrepancy", "Address discrepancy", "Expert name", "Nothing is inconsistent"], correct: 0, explanation: "The testimony and contemporaneous email give different response deadlines." }
    }
  }
];

const app = document.querySelector("#app");
let state = {
  caseDef: null,
  facts: null,
  docIndex: 0,
  typed: "",
  attempts: 0,
  correctAttempts: 0,
  startedAt: 0,
  checkResults: [],
  activeCheck: null,
  checkAnswered: false
};

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function fill(template, facts = state.facts) {
  return template.replace(/{{(\w+)}}/g, (_, key) => facts[key] ?? "");
}

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function masthead(extra = "Civil Litigation Practice") {
  return `<header class="masthead"><button class="wordmark" data-home aria-label="Return to case library">CASEFILE</button><span class="course-label">${extra}</span></header>`;
}

function renderHome() {
  state = { ...state, caseDef: null, facts: null, docIndex: 0, typed: "", attempts: 0, correctAttempts: 0, startedAt: 0, checkResults: [], activeCheck: null, checkAnswered: false };
  app.innerHTML = `<div class="shell">${masthead()}
    <section class="home">
      <div class="home-title"><h1>CASE<br>FILE</h1><p>Civil Litigation Practice</p></div>
      <div class="library">
        <h2>Open a case</h2>
        <div class="case-list">
          ${CASES.map(caseDef => `<button class="case-row" data-case="${caseDef.id}">
            <span><span class="case-name">${caseDef.title}</span><span class="case-meta">${caseDef.type} · ${caseDef.documents.length} documents</span></span>
            <span class="case-arrow" aria-hidden="true">→</span>
          </button>`).join("")}
        </div>
        <button class="text-button" data-random>Random File</button>
      </div>
    </section>
  </div>`;
  bindCommon();
  document.querySelectorAll("[data-case]").forEach(button => button.addEventListener("click", () => startCase(button.dataset.case)));
  document.querySelector("[data-random]").addEventListener("click", () => startCase(pick(CASES).id));
}

function startCase(id) {
  const caseDef = CASES.find(item => item.id === id);
  state = { caseDef, facts: caseDef.facts(), docIndex: 0, typed: "", attempts: 0, correctAttempts: 0, startedAt: Date.now(), checkResults: [], activeCheck: null, checkAnswered: false };
  renderDocument();
}

function currentDocument() {
  const [phase, title, template] = state.caseDef.documents[state.docIndex];
  return { phase, title, text: fill(template) };
}

function renderIndex() {
  return `<aside class="file-index" aria-label="Case file progress"><h2>File index</h2><ol class="index-list">
    ${state.caseDef.phases.map(phase => {
      const phaseDocs = state.caseDef.documents.map((doc, index) => ({ phase: doc[0], index })).filter(item => item.phase === phase);
      const isDone = phaseDocs.every(item => item.index < state.docIndex);
      const isCurrent = phaseDocs.some(item => item.index === state.docIndex);
      return `<li class="${isDone ? "done" : isCurrent ? "current" : ""}">${phase}</li>`;
    }).join("")}
  </ol></aside>`;
}

function renderDocument() {
  const doc = currentDocument();
  const accuracy = state.attempts ? Math.round((state.correctAttempts / state.attempts) * 100) : 100;
  app.innerHTML = `<div class="shell">${masthead(`Document ${state.docIndex + 1} / ${state.caseDef.documents.length}`)}
    <div class="play-layout">
      ${renderIndex()}
      <article class="document">
        <header class="document-header">
          <div><p class="matter-name">${state.caseDef.title}</p><h1 class="document-title">${doc.title}</h1></div>
          <span class="accuracy">Accuracy ${accuracy}%</span>
        </header>
        <div class="typing-wrap" tabindex="0" role="textbox" aria-label="Typing area. Type the displayed document." aria-multiline="true">
          <p class="typing-text" aria-hidden="true"></p>
          <textarea class="capture" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" aria-hidden="true"></textarea>
        </div>
        <footer class="document-footer"><span class="keyboard-note">Type to begin. Backspace to correct.</span><span data-continue-slot></span></footer>
      </article>
    </div>
  </div>`;
  bindCommon();
  bindTyping(doc.text);
}

function bindTyping(target) {
  const wrap = document.querySelector(".typing-wrap");
  const capture = document.querySelector(".capture");
  const text = document.querySelector(".typing-text");
  const note = document.querySelector(".keyboard-note");
  const continueSlot = document.querySelector("[data-continue-slot]");

  function draw() {
    text.innerHTML = Array.from(target).map((char, index) => {
      let className = "char";
      if (index < state.typed.length) className += state.typed[index] === char ? " typed" : " wrong";
      if (index === state.typed.length) className += " cursor";
      return `<span class="${className}">${escapeHtml(char)}</span>`;
    }).join("");
    const accuracy = state.attempts ? Math.round((state.correctAttempts / state.attempts) * 100) : 100;
    document.querySelector(".accuracy").textContent = `Accuracy ${accuracy}%`;
    if (state.typed.length === target.length && state.typed === target) {
      note.textContent = "Document complete";
      continueSlot.innerHTML = `<button class="primary-button" data-continue>Continue</button>`;
      document.querySelector("[data-continue]").addEventListener("click", advance);
    }
  }

  function focusCapture() { capture.focus({ preventScroll: true }); }
  wrap.addEventListener("click", focusCapture);
  wrap.addEventListener("focus", focusCapture);
  capture.addEventListener("paste", event => event.preventDefault());
  capture.addEventListener("keydown", event => {
    if (event.key === "Backspace") {
      event.preventDefault();
      state.typed = state.typed.slice(0, -1);
      draw();
      return;
    }
    if (event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey || state.typed.length >= target.length) return;
    event.preventDefault();
    const expected = target[state.typed.length];
    state.attempts += 1;
    if (event.key === expected) state.correctAttempts += 1;
    state.typed += event.key;
    draw();
  });
  draw();
  requestAnimationFrame(focusCapture);
}

function advance() {
  const completedIndex = state.docIndex + 1;
  const check = state.caseDef.checks[completedIndex];
  state.typed = "";
  if (check) {
    state.activeCheck = check;
    state.checkAnswered = false;
    renderCheck();
    return;
  }
  goNextDocument();
}

function goNextDocument() {
  state.activeCheck = null;
  state.docIndex += 1;
  if (state.docIndex >= state.caseDef.documents.length) renderComplete();
  else renderDocument();
}

function renderCheck() {
  const check = state.activeCheck;
  app.innerHTML = `<div class="shell">${masthead(state.caseDef.title)}
    <section class="file-check">
      <p class="section-label">File Check</p>
      <h1 class="check-prompt">${fill(check.prompt)}</h1>
      <p class="check-context">${fill(check.context)}</p>
      <div class="answers">
        ${check.options.map((option, index) => `<button class="answer" data-answer="${index}"><span class="answer-key">${String.fromCharCode(65 + index)}</span><span>${fill(option)}</span></button>`).join("")}
      </div>
      <div data-check-result></div>
    </section>
  </div>`;
  bindCommon();
  document.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => answerCheck(Number(button.dataset.answer))));
}

function answerCheck(selected) {
  if (state.checkAnswered) return;
  state.checkAnswered = true;
  const correct = selected === state.activeCheck.correct;
  state.checkResults.push(correct);
  document.querySelectorAll("[data-answer]").forEach((button, index) => {
    button.disabled = true;
    if (index === state.activeCheck.correct) button.classList.add("correct");
    if (index === selected && !correct) button.classList.add("incorrect");
  });
  document.querySelector("[data-check-result]").innerHTML = `<div class="check-result"><p>${correct ? "Correct." : "Review the file."} ${fill(state.activeCheck.explanation)}</p><button class="primary-button" data-resume>Continue</button></div>`;
  document.querySelector("[data-resume]").addEventListener("click", goNextDocument);
}

function renderComplete() {
  const accuracy = state.attempts ? ((state.correctAttempts / state.attempts) * 100).toFixed(1) : "100.0";
  const minutes = Math.max((Date.now() - state.startedAt) / 60000, 1 / 60);
  const words = state.caseDef.documents.reduce((sum, doc) => sum + fill(doc[2]).trim().split(/\s+/).length, 0);
  const wpm = Math.max(1, Math.round(words / minutes));
  const flagged = state.checkResults.filter(Boolean).length;
  app.innerHTML = `<div class="shell">${masthead(state.caseDef.title)}
    <section class="complete">
      <p class="section-label">File Complete</p>
      <h1>${state.caseDef.title}</h1>
      <dl class="results">
        <div class="result"><dt>Accuracy</dt><dd>${accuracy}%</dd></div>
        <div class="result"><dt>Details flagged</dt><dd>${flagged} / ${state.checkResults.length}</dd></div>
        <div class="result"><dt>Typing pace</dt><dd>${wpm} WPM</dd></div>
      </dl>
      <div class="complete-actions">
        <button class="primary-button" data-replay>Replay with new facts</button>
        <button class="secondary-button" data-other>Open another file</button>
      </div>
    </section>
  </div>`;
  bindCommon();
  document.querySelector("[data-replay]").addEventListener("click", () => startCase(state.caseDef.id));
  document.querySelector("[data-other]").addEventListener("click", renderHome);
}

function bindCommon() {
  document.querySelectorAll("[data-home]").forEach(button => button.addEventListener("click", renderHome));
}

renderHome();
