const AllProductsLoading = () => {
  return (
    <main className="w-full">
      <table className="w-full">
        <thead>
          <tr className="animate-pulse">
            {Array.from({ length: 5 }, (_, index) => (
              <th key={index}>
                <div className="w-14 h-3 bg-light-gray dark:bg-dark-gray rounded" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 7 }, (_, index) => (
            <tr key={index} className="animate-pulse">
              <td className="flex items-center gap-5">
                <div className="size-10 bg-light-gray dark:bg-dark-gray rounded-full" />

                <div className="flex flex-col items-start gap-1">
                  <div className="w-28 h-3 bg-light-gray dark:bg-dark-gray rounded" />
                  <div className="w-14 h-3 bg-light-gray dark:bg-dark-gray rounded" />
                </div>
              </td>

              <td>
                <div className="w-14 h-3 bg-light-gray dark:bg-dark-gray rounded" />
              </td>

              <td className="space-y-1">
                <div className="w-24 h-3 bg-light-gray dark:bg-dark-gray rounded" />
                <div className="w-16 h-3 bg-light-gray dark:bg-dark-gray rounded" />
              </td>

              <td>
                <div className="w-20 h-3 bg-light-gray dark:bg-dark-gray rounded" />
              </td>

              <td>
                <div className="w-14 h-3 bg-light-gray dark:bg-dark-gray rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AllProductsLoading;
