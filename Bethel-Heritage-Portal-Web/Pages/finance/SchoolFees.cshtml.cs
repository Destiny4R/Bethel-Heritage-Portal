using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using TheAgooProjectDataAccess;

namespace Bethel_Heritage_Portal_Web.Pages.finance
{
    public class SchoolFeesModel : PageModel
    {
        [Authorize(Roles = SD.IsStudent)]
        public void OnGet()
        {
        }
    }
}
