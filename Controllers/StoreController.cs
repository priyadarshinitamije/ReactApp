using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactApp.Models;
using Newtonsoft.Json;

namespace ReactApp.Controllers
{
    public class StoreController : Controller
    {
        DemoProjectEntities1 db = new DemoProjectEntities1();

        public ActionResult Index()
        {
            return View();
        }

        // GET Products
        public JsonResult GetStoreList()
        {
            try
            {
                var storeList = db.Stores.Select(x => new StoreModel
                {
                    StoreId = x.Id,
                    StoreName = x.Name,
                    StoreAddress = x.Address,
                }).ToList();

                return Json(storeList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                Console.Write(e.Data + "Exception Occured");
                return new JsonResult { Data = "Data Not Found", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }
    }
}