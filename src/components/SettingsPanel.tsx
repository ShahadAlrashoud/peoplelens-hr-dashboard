export default function SettingsPanel() {
  return (
    <div className="space-y-6">

      {/* Account */}
      <div className="bg-white rounded-xl border p-6">

        <h3 className="text-lg font-semibold">
          Account
        </h3>

        <div className="mt-4 space-y-3">

          <div>
            <p className="text-sm text-gray-500">
              Name
            </p>
            <p className="font-medium">
              HR Admin
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Role
            </p>
            <p className="font-medium">
              Administrator
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>
            <p className="font-medium">
              admin@talentiq.com
            </p>
          </div>

        </div>

      </div>



      {/* Preferences */}
      <div className="bg-white rounded-xl border p-6">

        <h3 className="text-lg font-semibold">
          Preferences
        </h3>


        <div className="mt-4 space-y-4">

          <div className="flex items-center justify-between">

            <div>
              <p className="font-medium">
                Notifications
              </p>

              <p className="text-sm text-gray-500">
                Receive updates about employee activity.
              </p>
            </div>


            <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 text-sm">
              Enabled
            </button>

          </div>



          <div className="flex items-center justify-between">

            <div>
              <p className="font-medium">
                Appearance
              </p>

              <p className="text-sm text-gray-500">
                Theme customization will be available soon.
              </p>
            </div>


            <button
              disabled
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed text-sm"
            >
              Customize
            </button>

          </div>

        </div>

      </div>




      {/* System */}
      <div className="bg-white rounded-xl border p-6">

        <h3 className="text-lg font-semibold">
          System
        </h3>


        <div className="mt-4 space-y-3">

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
            Security Settings
          </button>


          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
            Data Management
          </button>


        </div>

      </div>


    </div>
  );
}