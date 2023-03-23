import React from "react";

const Courses = () => {
  return (
    <div>
      <div>
        <div className="card bg-neutral">
          <div className="card-body">
            <div className="flex items-center gap-10">
              <div className="avatar online">
                <div className="w-32 rounded-full">
                  <img src="https://www.jobstreet.co.id/en/cms/employer/wp-content/uploads/sites/20/2019/10/cheerful-thankful-young-woman-honored-embarrassed_1262-14837.jpg" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">John Smith </h3>
                <div className="flex items-center gap-2">
                  <span>
                    <i class="ri-user-3-line ri-sm"></i>
                  </span>
                  <p>Admin</p>
                </div>
                <div className="flex mt-3 gap-10">
                  <div className="border-2 p-4 border-yellow-500 text-center rounded-md border-dotted">
                    <p>3k</p>
                    <h3 className="font-bold text-lg">Rider</h3>
                  </div>
                  <div className="border-2 p-4 border-yellow-500 text-center rounded-md border-dotted">
                    <p>3k</p>
                    <h3 className="font-bold text-lg">Learner</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
