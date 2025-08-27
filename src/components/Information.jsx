

const Information = ({ cardData }) => {
  const {
    atomicRadius,
    atomicWeight,
    density,
    electroNegativity,
    meltingPoint,
    boilingPoint,
    standardState,
    ionizationEnergy,
  } = cardData;

  return (
    <div className="w-[260px] h-[240px] md:w-[300px] lg:w-[320px] md:h-[400px] xl:w-[420px] xl:h-[500px] flex flex-col justify-between text-[var(--text-s)] text-sm xl:text-base font-medium font-(family-name:--font-dm-mono)">
      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wide group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            atomic radius
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {atomicRadius}
          </dd>
        </div>
      </dl>

      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wider group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            atomic weight
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {atomicWeight}
          </dd>
        </div>
      </dl>

      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wider group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            density
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {density}
          </dd>
        </div>
      </dl>

      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wider group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            electronegativity
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {electroNegativity}
          </dd>
        </div>
      </dl>

      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wider group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            boilingpoint
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {boilingPoint}
          </dd>
        </div>
      </dl>

      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wider group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            meltingpoint
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {meltingPoint}
          </dd>
        </div>
      </dl>

      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wider group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            standard state
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {standardState}
          </dd>
        </div>
      </dl>

      <dl className="group/info">
        <div className="flex justify-between gap-2 items-center">
          <dt className=" uppercase tracking-wider group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            ionization energy
          </dt>
          <div className="border-b flex-1 border-dashed border-gray-500 group-hover/info:border-gray-200 transition-all duration-300 ease-linear"></div>
          <dd className=" whitespace-nowrap group-hover/info:text-[var(--text-p)] transition-all duration-300 ease-linear">
            {ionizationEnergy}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Information;
