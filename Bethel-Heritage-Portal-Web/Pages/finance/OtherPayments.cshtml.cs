using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using TheAgooProjectDataAccess;

namespace Bethel_Heritage_Portal_Web.Pages.finance
{
    [Authorize(Roles = SD.IsStudent)]
    public class OtherPaymentsModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}
